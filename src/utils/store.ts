import { Uri } from "vscode";

class Store {
  public booksPath = '';
  public extensionPath = '';
  public globalStorageUri: Uri = Uri.file('');
  public currentPanel = '';
}

const store = new Store();
export { store };
