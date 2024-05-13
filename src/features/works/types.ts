export interface IProjectsData {
  id: number;
  image: string;
  title: string;
  category: string;
  gitHub: string;
  demo: string;
}

export interface IProjectNav {
  name: string | null
}

export interface IWorkStates {
  item: IProjectNav;
  projects: IProjectsData[];
  active: number;
}