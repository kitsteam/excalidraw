import { info } from "../components/icons";

type InfoIconProps = {
  title?: string;
  name?: string;
  id?: string;
  onClick?(): void;
};

export const InfoIcon = (props: InfoIconProps) => (
  <label title={`${props.title}`} className="info-icon">
    <div onClick={props.onClick}>{info}</div>
  </label>
);
