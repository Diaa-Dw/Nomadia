export interface AdminTableHeaderProps {
  title: string;
  searchValue: string;
  onSearchChange: (value: string) => void;
  onAdd: () => void;
}
