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
  }],

  courses: [{
    name: 'Крос-платформне програмування',
    teacher: 'Євген Шемет',
    cover: 'courses/covers/js.png'
  }, {
    name: 'Теорія алгоритмів',
    teacher: 'Інший Хтось',
    cover: 'courses/covers/algorithm.png'
  }]
};

function delay(data, ms) {
  return new Promise((resolve) =>
    setTimeout(() => resolve(data), ms)
  );
}

const defaultTimeout = 1000;

export function getGroups(ms = defaultTimeout) {
  return delay(data.groups, ms);
}

export function getStudents(group, ms = defaultTimeout) {
  return delay(data.students.filter((student) => student.group === group), ms);
}

export function getStudent(name, ms = defaultTimeout) {
  return delay(data.students.find((student) => student.name === name), ms);
}

export function getCourses(ms = defaultTimeout) {
  return delay(data.courses, ms);
}

export function getImage(src, ms = defaultTimeout) {
  return import(`./assets/${src}`)
    .then((image) => delay(image, ms));
}
