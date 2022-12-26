export interface folderInterface {
  type: "application" | "folder";
  name: string;
  icon: string;
  link?: string;
  children?: folderInterface[];
}
