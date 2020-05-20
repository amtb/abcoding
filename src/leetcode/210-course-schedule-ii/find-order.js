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

    this.addCourse(course);
    this.addCourse(prereq, this.getCourse(course));
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
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
  const graph = new Graph();
  prerequisites.forEach((prereq) => graph.addCourses(prereq));

  const graphNodes = graph.courses.size;
  if (graphNodes < numCourses) {
    // complete with courses with no dependencies
    for (let i = 0; i < numCourses; i++) {
      if (!graph.courses.has(i)) {
        graph.addCourse(i);
      }
    }
  }

  const hasCycle = () => {
    const whites = new Set(graph.courses.values());
    const blacks = new Set();
    const greys = new Set();

    /**
     * @param {Course} node
     */
    const findCycle = (node) => {
      whites.delete(node);
      greys.add(node);

      for (const prereq of node.prereq) {
        if (!blacks.has(prereq)) {
          if (greys.has(prereq)) {
            return true;
          }
          if (findCycle(prereq)) {
            return true;
          }
        }
      }

      blacks.add(node);
      greys.delete(node);
    };

    while (whites.size !== 0) {
      const node = whites.values().next().value;
      if (findCycle(node)) {
        return true;
      }
    }
    return false;
  };

  if (hasCycle()) {
    return [];
  }

  // exploring
  const visited = new Set();
  // explored
  const sorted = [];

  /**
   * topological sort of a node
   * @param {Course} node
   */
  const sort = (node) => {
    if (!visited.has(node)) {
      visited.add(node);
      for (const neighbor of node.prereq) {
        sort(neighbor);
      }
      sorted.unshift(node.value);
    }
  };

  for (const node of graph.courses.values()) {
    sort(node);
  }

  return sorted;
};

export default findOrder;
