
export interface Resource {
  id: string;
  title: string;
  type: 'PDF' | 'DOC' | 'PPT' | 'ZIP' | 'OTHER';
  description: string;
  fileUrl: string;
  uploadDate: string;
  size: string;
}

export interface Subject {
  id: string;
  name: string;
  code: string;
  resources: Resource[];
}

export interface Semester {
  year: number;
  semester: number;
  subjects: Subject[];
}

export interface User {
  email: string;
  name?: string;
}
