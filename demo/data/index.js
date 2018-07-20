const data = {
  groups: [{
    name: '1КН-16'
  }, {
    name: '2КН-16'
  }],

  students: [{
    name: 'Абрамов Денис',
    group: '1КН-16',
    photo: 'students/photos/01.jpg'
  }, {
    name: 'Альперт Софія',
    group: '2КН-16',
    photo: 'students/photos/02.jpg'
  }, {
    name: 'Валім Хосе',
    group: '1КН-16',
    photo: 'students/photos/03.jpg'
  }, {
    name: 'Возняк Стів',
    group: '2КН-16',
    photo: 'students/photos/04.jpg'
  }, {
    name: 'Кац Єгуда',
    group: '1КН-16',
    photo: 'students/photos/05.jpg'
  }, {
    name: 'Мацумото Юкіхіро',
    group: '2КН-16',
    photo: 'students/photos/06.jpg'
  }, {
    name: 'Метз Санді',
    group: '1КН-16',
    photo: 'students/photos/07.jpg'
  }, {
    name: 'Торвальдс Лінус',
    group: '2КН-16',
    photo: 'students/photos/08.jpg'
  }, {
    name: 'Хайнемайнер Давид',
    group: '1КН-16',
    photo: 'students/photos/09.jpg'
  }, {
    name: 'Цукерберг Марко',
    group: '2КН-16',
    photo: 'students/photos/10.jpg'
  }]
};

function delay(data, ms) {
  return new Promise((resolve) =>
    setTimeout(() => resolve(data), ms)
  );
}

export function getGroups(ms = 1500) {
  return delay(data.groups, ms);
}

export function getStudents(group, ms = 1500) {
  return delay(data.students.filter((student) => student.group === group), ms);
}

export function getStudent(name, ms = 1500) {
  return delay(data.students.find((student) => student.name === name), ms);
}

export function getImage(src, ms = 1500) {
  return import(`./assets/${src}`)
    .then((image) => delay(image, ms));
}
