class Course {
  constructor(value) {
    this.value = value;
    this.prereq = new Set();
  }

  addPrereq(course) {
    this.prereq.add(course);
  }
}

class Graph {
  constructor() {
    this.courses = new Map();
  }

  addCourses(tuples) {
    const [course, prereq] = tuples;

    this.addCourse(prereq);
    this.addCourse(course, this.getCourse(prereq));
  }

  addCourse(number, prereq) {
    if (!this.courses.has(number)) {
      const course = new Course(number);
      this.courses.set(number, course);
    }

    if (prereq) {
      const course = this.getCourse(number);
      course.addPrereq(prereq);
    }
  }

  getCourse(number) {
    return this.courses.get(number);
  }
}

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (_, prerequisites) {
  const graph = new Graph();
  prerequisites.forEach((prereq) => graph.addCourses(prereq));

  // to explore
  const whites = new Set(graph.courses.values());
  // exploring
  const greys = new Set();
  // explored
  const blacks = new Set();

  /**
   * @param {Course} node
   */
  const hasCycle = (node) => {
    // add to on going
    whites.delete(node);
    greys.add(node);

    for (const neighor of node.prereq) {
      if (!blacks.has(neighor)) {
        // found a cycle
        if (greys.has(neighor)) {
          return true;
        }

        // next
        if (hasCycle(neighor)) {
          return true;
        }
      }
    }

    // done dealing with this node
    blacks.add(node);
    greys.delete(node);
    return false;
  };

  while (whites.size !== 0) {
    const node = whites.values().next().value;
    if (hasCycle(node)) {
      return false;
    }
  }

  return true;
};

export default canFinish;
