export class Course {
  constructor (value) {
    this.value = value;
    this.prereq = new Set();
  }

  addPrereq (course) {
    this.prereq.add(course);
  }

  hasCycle () {
    if (this.cycles !== undefined) {
      return this.cycles;
    }

    const visited = new Set();
    const queue = [];

    for (const prereq of this.prereq) {
      queue.push(prereq);
    }

    while (queue.length !== 0) {
      const node = queue.shift();
      if (node.cycles) {
        return true;
      }

      if (node === this) {
        node.cycles = true;
        return true;
      }

      if (!visited.has(node)) {
        visited.add(node);
        for (const prereq of node.prereq) {
          queue.push(prereq);
        }
      }
    }

    this.cycles = false;
    for (const prereq of this.prereq) {
      prereq.cycles = false;
    }

    return false;
  }
}

export class Graph {
  constructor () {
    this.courses = new Map();
  }

  addCourses (tuples) {
    const [course, prereq] = tuples;

    this.addCourse(prereq);
    this.addCourse(course, this.getCourse(prereq));
  }

  addCourse (number, prereq) {
    if (!this.courses.has(number)) {
      const course = new Course(number);
      this.courses.set(number, course);
    }

    if (prereq) {
      const course = this.getCourse(number);
      course.addPrereq(prereq);
    }
  }

  getCourse (number) {
    return this.courses.get(number);
  }

  hasCycle () {
    for (const course of this.courses.values()) {
      if (course.hasCycle()) {
        return true;
      }
    }

    return false;
  }
}

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (_, prerequisites) {
  const courses = new Graph();
  prerequisites.forEach((prereq) => courses.addCourses(prereq));
  return !courses.hasCycle();
};

export default canFinish;
