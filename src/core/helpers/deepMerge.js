import mergeWith from 'lodash/mergeWith';
import isArray from 'lodash/isArray';

function supportArrays(objValue, srcValue) {
  if (isArray(objValue)) {
    return objValue.concat(srcValue);
  }
  return undefined;
}
export default function deepMerge(target, source) {
  return mergeWith(target, source, supportArrays);
}
