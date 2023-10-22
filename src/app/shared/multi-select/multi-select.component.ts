import {
  Component,
  forwardRef,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { ListItem, IDropdownSettings } from './multi-select.model';

export const DROPDOWN_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MultiSelect2Component),
  multi: true,
};

@Component({
  selector: 'app-multi-select2',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.scss'],
  providers: [DROPDOWN_CONTROL_VALUE_ACCESSOR],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MultiSelect2Component implements ControlValueAccessor {
  public _settings: IDropdownSettings = {
    defaultOpen: false,
    position: 'top'
  };
  public _data: Array<ListItem> = [];
  public selectedItems: Array<ListItem> = [];
  public isDropdownOpen = true;
  _placeholder = 'Select';

  private onTouched!: Function;
  private onChanged!: Function;

  @Input()
  public set placeholder(value: string) {
    if (value) {
      this._placeholder = value;
    } else {
      this._placeholder = 'Select';
    }
  }
  @Input()
  disabled = false;

  @Input()
  public set selectedData(value: Array<ListItem>) {
    if (value) {
      this.selectedItems = Object.assign(this.selectedItems, value);
    }
  }

  @Input()
  public set data(value: Array<any>) {
    this._data = value;
  }

  @Output() select = new EventEmitter<any>();
  constructor(private cdr: ChangeDetectorRef) {}

  writeValue(value: string): void {
    console.log('value', value);
  }

  registerOnChange(fn: any): void {
    this.onChanged = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }

  selectDropDown(selected: any) {
    this.onTouched();
    this._settings.defaultOpen = !this._settings.defaultOpen;
    this.selectedItems.push(selected);
    this.onChanged(this.selectedItems);
  }

  closeDropdown() {
    this._settings.defaultOpen = false;
  }

  inputBlur(event: any) {
    this._settings.defaultOpen = !this._settings.defaultOpen;
  }

  closeSelected(selectedItem: ListItem) {
    this.selectedItems = this.selectedItems.filter((item: ListItem) => item.id !== selectedItem.id)
  }
}
