import fs from 'fs';
import yaml from 'js-yaml';

const loadYaml = path => yaml.load(fs.readFileSync(path, 'utf8'));
export default loadYaml;