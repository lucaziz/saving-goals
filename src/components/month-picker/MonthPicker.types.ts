export interface MonthPickerProps {
  monthsFromNow: number;
  label?: string;
  onChange?: (value: number, description: string) => void;
}
