export const shelfs =  Object.freeze({
    'currentlyReading' : 1,
    'wantToRead' : 2,
    'read' : 3,
    'none' : 4
  });

export const labelShelfs = {
    [shelfs.currentlyReading] : 'Currently reading',
    [shelfs.wantToRead] : 'Want to read',
    [shelfs.read] : 'Read',
    [shelfs.none] : 'None'
}