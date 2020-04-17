export function getHookSetterName(name) {
  return 'set' + name.charAt(0).toUpperCase() + name.slice(1);
}
