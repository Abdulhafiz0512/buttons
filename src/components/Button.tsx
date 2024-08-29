import React from "react";

export default function Button(props: {
  onclick?: () => void;
  color?: string;
  bgColor?: string;
  children: React.ReactNode;
  pill?: boolean;
  fontSize?: number;
  outline?: boolean;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  disabled?: boolean;
}) {
  let bgColor = props.bgColor;
  let textColor = props.color;
  let borderColor = bgColor;
  let cursor = props.disabled ? 'not-allowed' : 'pointer';
  let opacity = props.disabled ? 0.6 : 1;

  // Handle color and outline
  switch (props.color) {
    case "blue":
      bgColor = props.outline ? "transparent" : "#1d4ed8";
      textColor = props.outline ? "#1d4ed8" : "white";
      borderColor = "#1d4ed8";
      break;
    case "gray":
      bgColor = props.outline ? "transparent" : "#f9fafb";
      textColor = props.outline ? "#111827" : "#111827";
      borderColor = "#d1d5db";
      break;
    case "dark":
      bgColor = props.outline ? "transparent" : "#1f2937";
      textColor = props.outline ? "#1f2937" : "white";
      borderColor = "#1f2937";
      break;
    case "light":
      bgColor = props.outline ? "transparent" : "#f9fafb";
      textColor = props.outline ? "#111827" : "#111827";
      borderColor = "#d1d5db";
      break;
    case "success":
      bgColor = props.outline ? "transparent" : "#15803d";
      textColor = props.outline ? "#15803d" : "white";
      borderColor = "#15803d";
      break;
    case "failure":
      bgColor = props.outline ? "transparent" : "#b91c1c";
      textColor = props.outline ? "#b91c1c" : "white";
      borderColor = "#b91c1c";
      break;
    case "warning":
      bgColor = props.outline ? "transparent" : "#facc15";
      textColor = props.outline ? "#facc15" : "white";
      borderColor = "#facc15";
      break;
    case "purple":
      bgColor = props.outline ? "transparent" : "#7e22ce";
      textColor = props.outline ? "#7e22ce" : "white";
      borderColor = "#7e22ce";
      break;
    default:
      bgColor = props.outline ? "transparent" : "#0e7490";
      textColor = props.outline ? "#0e7490" : "white";
      borderColor = "#0e7490";
      break;
  }

  // Handle sizes
  let paddingInline, paddingBlock, fontSize;
  switch (props.size) {
    case 'xs':
      paddingInline = '0.5rem';
      paddingBlock = '0.25rem';
      fontSize = '0.75rem';
      break;
    case 'sm':
      paddingInline = '0.75rem';
      paddingBlock = '0.375rem';
      fontSize = '0.875rem';
      break;
    case 'md':
      paddingInline = '1rem';
      paddingBlock = '0.5rem';
      fontSize = '0.875rem';
      break;
    case 'lg':
      paddingInline = '1.25rem';
      paddingBlock = '0.625rem';
      fontSize = '1rem';
      break;
    case 'xl':
      paddingInline = '1.5rem';
      paddingBlock = '0.75rem';
      fontSize = '1rem';
      break;
    default:
      paddingInline = '1rem';
      paddingBlock = '0.5rem';
      fontSize = '0.875rem';
      break;
  }

  return (
    <div style={{ display: 'inline-block', margin: '4px' }}>
      <button
        onClick={!props.disabled ? props.onclick : undefined}
        disabled={props.disabled}
        style={{
          color: textColor,
          backgroundColor: bgColor,
          borderRadius: props.pill ? "9999px" : "6px",
          padding: `${paddingBlock} ${paddingInline}`,
          fontSize: fontSize,
          border: props.outline ? `2px solid ${borderColor}` : "none",
          cursor: cursor,
          opacity: opacity,
        }}
      >
        {props.children}
      </button>
    </div>
  );
}
