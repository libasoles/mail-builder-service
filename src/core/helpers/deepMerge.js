import { mergeWith, isArray } from 'lodash';

export default function deepMerge(target, source) {
  return mergeWith(target, source, supportArrays);
}

function supportArrays(objValue, srcValue) {
  if (isArray(objValue)) {
    return objValue.concat(srcValue);
  }
}
