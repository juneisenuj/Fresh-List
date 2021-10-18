export default function something(state = 'default state', action) {
  switch (action.type) {
    case 'testing1':
      stuff = 'somethingsomething'
      break;

    default:
      'dosomethingdefault'
  }
}