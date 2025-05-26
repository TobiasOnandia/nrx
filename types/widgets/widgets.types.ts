export type WidgetComponentProps = {
  id: string;
};

export type WidgetComponentType = React.ComponentType<WidgetComponentProps>;

export interface WidgetTemplateData {
  id: string;
  title: string;
  description: string;
  types: string[];
  defaultConfig: string;
  defaultLayout: string;
}
