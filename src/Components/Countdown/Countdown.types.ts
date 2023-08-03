import React from "react";

export type CountdownRendererProps = { days: number; hours: number; minutes: number; seconds: number; completed: boolean; }

export type CountdownProps = {
  date?: Date;
  renderer?: (props: CountdownRendererProps) => React.ReactElement;
  className?: string;
}
