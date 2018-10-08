import * as React from "react";
import cn from "classnames";
import styles from "./InputRow.module.scss";

export default React.forwardRef(function InputRow(props, ref) {
  const { className, placeholder, ...rest } = props;
  return (
    <label className={cn(className, styles.label)}>
      {placeholder}
      <input
        {...rest}
        ref={ref}
        className={styles.input}
        placeholder={placeholder}
      />
    </label>
  );
});
