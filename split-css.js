import fs from 'fs';
import postcss from 'postcss';

const css = fs.readFileSync('src/index.css', 'utf8');

const mapping = {
  Navbar: ['.navbar', '.brand', '.brand-name', '.brand-role', '.availability', '.status-dot'],
  Hero: ['.hero', '.hero-content', '.hero-stack', '.hero-button', '.hero-visual', '.browser', '.browser-top', '.browser-dots', '.browser-url', '.browser-content', '.mini-label', '.fake-dashboard'],
  ProjectDetail: ['.project-detail', '.detail-number', '.detail-label', '.detail-tech-list', '.project-next', '.project-back', '.project-meta'],
  Projects: ['.projects-section', '.projects-list', '.project-row', '.project-name', '.project-technologies', '.project-arrow', '.project'],
  Timeline: ['.timeline', '.timeline-item', '.timeline-year', '.timeline-line', '.timeline-dot', '.timeline-connector', '.timeline-content'],
  HowIBuild: ['.project-process', '.build-grid', '.build-card', '.tech-line'],
  About: ['.about-grid', '.about-content'],
  LetsBuild: ['.lets-build'],
  Footer: ['.footer']
};

const componentsCss = {};
for (const key of Object.keys(mapping)) {
  componentsCss[key] = postcss.root();
}
const mainCss = postcss.root();

function getComponentForSelector(selector) {
  for (const [component, classes] of Object.entries(mapping)) {
    if (classes.some(c => selector.includes(c))) {
      return component;
    }
  }
  return null;
}

postcss([
  (root) => {
    root.walkRules(rule => {
      if (rule.parent && rule.parent.type === 'atrule' && rule.parent.name === 'media') return;
      const comp = getComponentForSelector(rule.selector);
      if (comp) {
        componentsCss[comp].append(rule.clone());
        rule.remove();
      }
    });

    root.walkAtRules('media', rule => {
      const componentNodes = {};
      const remainingNodes = [];

      rule.nodes.forEach(node => {
        if (node.type === 'rule') {
          const comp = getComponentForSelector(node.selector);
          if (comp) {
            if (!componentNodes[comp]) componentNodes[comp] = [];
            componentNodes[comp].push(node.clone());
          } else {
            remainingNodes.push(node.clone());
          }
        } else {
          remainingNodes.push(node.clone());
        }
      });

      for (const [comp, nodes] of Object.entries(componentNodes)) {
        if (nodes.length > 0) {
          const newMedia = rule.clone({ nodes: nodes });
          componentsCss[comp].append(newMedia);
        }
      }

      if (remainingNodes.length > 0) {
        rule.nodes = remainingNodes;
      } else {
        rule.remove();
      }
    });

    root.nodes.forEach(node => mainCss.append(node.clone()));
  }
]).process(css, { from: 'src/index.css' }).then(result => {
  fs.writeFileSync('src/index.css', mainCss.toString());
  
  for (const [component, root] of Object.entries(componentsCss)) {
    if (root.nodes.length > 0) {
      if (component === 'ProjectDetail') {
        fs.writeFileSync(`src/pages/${component}.css`, root.toString());
      } else {
        fs.writeFileSync(`src/components/${component}.css`, root.toString());
      }
    }
  }
  console.log('CSS split complete.');
});
