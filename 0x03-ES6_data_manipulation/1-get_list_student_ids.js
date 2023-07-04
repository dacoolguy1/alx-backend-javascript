export default function getListStudentIds(objects) { // eslint-disable-line no-unused-vars
  if (!Array.isArray(objects)) {
    return [];
  }

  return objects.map((object) => object.id);
}
