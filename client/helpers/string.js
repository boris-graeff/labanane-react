export const slugify = function (str) {
  return str.replace(/\s+/g, '-').replace(/[^a-zA-Z0-9-]/g, '')
}