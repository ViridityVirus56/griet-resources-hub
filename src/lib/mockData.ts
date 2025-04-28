
import { Semester } from './types';

export const academicData: Semester[] = [
  {
    year: 1,
    semester: 1,
    subjects: [
      {
        id: '101',
        name: 'Engineering Mathematics I',
        code: 'MA101',
        resources: [
          {
            id: 'r1',
            title: 'Differential Equations Notes',
            type: 'PDF',
            description: 'Comprehensive notes on solving differential equations',
            fileUrl: '/files/mathematics-notes.pdf',
            uploadDate: '2023-07-15',
            size: '2.3 MB'
          },
          {
            id: 'r2',
            title: 'Calculus Problem Set',
            type: 'PDF',
            description: 'Practice problems for calculus section',
            fileUrl: '/files/calculus-problems.pdf',
            uploadDate: '2023-07-20',
            size: '1.5 MB'
          }
        ]
      },
      {
        id: '102',
        name: 'Engineering Physics',
        code: 'PH101',
        resources: [
          {
            id: 'r3',
            title: 'Mechanics Lecture Slides',
            type: 'PPT',
            description: 'Professor Kumar\'s slides on classical mechanics',
            fileUrl: '/files/mechanics-slides.ppt',
            uploadDate: '2023-07-10',
            size: '5.8 MB'
          }
        ]
      }
    ]
  },
  {
    year: 1,
    semester: 2,
    subjects: [
      {
        id: '103',
        name: 'Engineering Mathematics II',
        code: 'MA102',
        resources: [
          {
            id: 'r4',
            title: 'Linear Algebra Complete Guide',
            type: 'PDF',
            description: 'Comprehensive guide to linear algebra concepts',
            fileUrl: '/files/linear-algebra.pdf',
            uploadDate: '2023-12-05',
            size: '3.1 MB'
          }
        ]
      },
      {
        id: '104',
        name: 'Computer Programming',
        code: 'CS101',
        resources: [
          {
            id: 'r5',
            title: 'C Programming Examples',
            type: 'ZIP',
            description: 'Collection of example programs in C language',
            fileUrl: '/files/c-examples.zip',
            uploadDate: '2023-12-12',
            size: '4.2 MB'
          },
          {
            id: 'r6',
            title: 'Programming Assignment Solutions',
            type: 'DOC',
            description: 'Solutions to all programming assignments',
            fileUrl: '/files/assignment-solutions.doc',
            uploadDate: '2023-12-20',
            size: '1.8 MB'
          }
        ]
      }
    ]
  },
  {
    year: 2,
    semester: 1,
    subjects: [
      {
        id: '201',
        name: 'Data Structures',
        code: 'CS201',
        resources: [
          {
            id: 'r7',
            title: 'Data Structures Handbook',
            type: 'PDF',
            description: 'Complete handbook covering all data structures',
            fileUrl: '/files/ds-handbook.pdf',
            uploadDate: '2024-01-15',
            size: '5.4 MB'
          }
        ]
      }
    ]
  },
  {
    year: 2,
    semester: 2,
    subjects: [
      {
        id: '202',
        name: 'Database Management Systems',
        code: 'CS202',
        resources: [
          {
            id: 'r8',
            title: 'SQL Cheat Sheet',
            type: 'PDF',
            description: 'Quick reference for SQL commands',
            fileUrl: '/files/sql-cheatsheet.pdf',
            uploadDate: '2024-06-10',
            size: '1.2 MB'
          }
        ]
      }
    ]
  },
  {
    year: 3,
    semester: 1,
    subjects: [
      {
        id: '301',
        name: 'Software Engineering',
        code: 'CS301',
        resources: []
      }
    ]
  },
  {
    year: 3,
    semester: 2,
    subjects: [
      {
        id: '302',
        name: 'Computer Networks',
        code: 'CS302',
        resources: []
      }
    ]
  },
  {
    year: 4,
    semester: 1,
    subjects: [
      {
        id: '401',
        name: 'Machine Learning',
        code: 'CS401',
        resources: []
      }
    ]
  },
  {
    year: 4,
    semester: 2,
    subjects: [
      {
        id: '402',
        name: 'Cloud Computing',
        code: 'CS402',
        resources: []
      }
    ]
  }
];
