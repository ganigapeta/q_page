export interface IDropdownSettings {
  defaultOpen?: boolean;
  position?: string;
}

export class ListItem {
  id!: String | number;
  text!: String | number;
  isDisabled?: boolean;
  isSelected ?: boolean;

  public constructor(source: any) {
    if (typeof source === 'string' || typeof source === 'number') {
      this.id = this.text = source;
      this.isDisabled = false;
    }
    if (typeof source === 'object') {
      this.id = source.id;
      this.text = source.text;
      this.isDisabled = source.isDisabled;
      this.isSelected = source.isSelected;
    }
  }
}
