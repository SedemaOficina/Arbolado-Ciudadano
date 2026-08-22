/* @ds-bundle: {"format":3,"namespace":"SEDEMADesignSystem_22c075","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Banner","sourcePath":"components/core/Banner.jsx"},{"name":"Boton","sourcePath":"components/core/Boton.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Firma","sourcePath":"components/core/Firma.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Breadcrumb","sourcePath":"components/navigation/Breadcrumb.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"b80d7b80b940","components/core/Banner.jsx":"b1797efd918b","components/core/Boton.jsx":"5a20a038b1bf","components/core/Card.jsx":"6c5319356d39","components/core/Firma.jsx":"071f3a1698c2","components/core/IconButton.jsx":"1da26a84a9d4","components/core/Tag.jsx":"159e4959cb19","components/feedback/Alert.jsx":"59c6c900c9d0","components/forms/Checkbox.jsx":"9960cc557f6b","components/forms/Input.jsx":"756c6ed203af","components/forms/Radio.jsx":"3cc8e1272d20","components/forms/Select.jsx":"52212ef682eb","components/forms/Switch.jsx":"29e69a7ad44a","components/navigation/Breadcrumb.jsx":"ec3eba1c13c2","components/navigation/Tabs.jsx":"d61c4ef05acb","ui_kits/dashboard/Content.jsx":"bd5bff0f7c27","ui_kits/dashboard/Sidebar.jsx":"180c9325970d","ui_kits/dashboard/Topbar.jsx":"5b8bcd10b8d0","ui_kits/micrositio/Footer.jsx":"296f5dde95a4","ui_kits/micrositio/Header.jsx":"87c3242ab8bf","ui_kits/micrositio/Hero.jsx":"1d0d4816dd9c","ui_kits/micrositio/NewsSection.jsx":"b2ecf415b159","ui_kits/micrositio/ProgramGrid.jsx":"b2756884e828"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SEDEMADesignSystem_22c075 = window.SEDEMADesignSystem_22c075 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Badge / etiqueta de estado SEDEMA.
 * tone: neutral | guinda | dorado | exito | error | alerta | info
 */
function Badge({
  children,
  tone = "neutral",
  style = {},
  ...rest
}) {
  const tones = {
    neutral: {
      bg: "var(--gris-10)",
      fg: "var(--gris-100)",
      bd: "var(--gris-40)"
    },
    guinda: {
      bg: "var(--guinda-20)",
      fg: "var(--guinda-oscuro)",
      bd: "var(--guinda-60)"
    },
    dorado: {
      bg: "var(--dorado-20)",
      fg: "var(--cafe)",
      bd: "var(--dorado-80)"
    },
    exito: {
      bg: "#E1F2E8",
      fg: "var(--estado-exito)",
      bd: "#A9D8BC"
    },
    error: {
      bg: "#FCE0E8",
      fg: "var(--estado-error)",
      bd: "#F4A8BF"
    },
    alerta: {
      bg: "#FFF4CF",
      fg: "var(--cafe)",
      bd: "var(--amarillo)"
    },
    info: {
      bg: "#E2EDF7",
      fg: "var(--azul)",
      bd: "#A9C7E6"
    }
  };
  const t = tones[tone] || tones.neutral;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "6px",
      fontFamily: "var(--font-cuerpo)",
      fontSize: "12px",
      fontWeight: 700,
      letterSpacing: "0.02em",
      lineHeight: 1,
      padding: "5px 10px",
      borderRadius: "var(--radio-1)",
      background: t.bg,
      color: t.fg,
      border: `1px solid ${t.bd}`,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Banner.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Banner / pleca de sección institucional.
 * Bloque guinda o marfil con pleca de acento, para encabezar secciones.
 */
function Banner({
  title,
  subtitle = null,
  tone = "guinda",
  // guinda | marfil
  actions = null,
  style = {},
  ...rest
}) {
  const isGuinda = tone === "guinda";
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: isGuinda ? "var(--guinda-100)" : "var(--marfil)",
      color: isGuinda ? "var(--blanco)" : "var(--gris-100)",
      borderTop: isGuinda ? "none" : "4px solid var(--dorado-100)",
      borderRadius: "var(--radio-0)",
      padding: "var(--esp-4) var(--esp-5)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "var(--esp-4)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-cuerpo)",
      fontSize: "var(--fs-titulo-1)",
      fontWeight: 700,
      lineHeight: 1.15,
      color: isGuinda ? "var(--blanco)" : "var(--guinda-100)"
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-cuerpo)",
      fontSize: "var(--fs-cuerpo-1)",
      marginTop: "6px",
      color: isGuinda ? "rgba(255,255,255,0.85)" : "var(--gris-80)"
    }
  }, subtitle)), actions && /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "none"
    }
  }, actions));
}
Object.assign(__ds_scope, { Banner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Banner.jsx", error: String((e && e.message) || e) }); }

// components/core/Boton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Botón institucional SEDEMA.
 * Variantes: primary (guinda), secondary (contorno dorado), tertiary (texto), danger.
 */
function Boton({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  iconLeft = null,
  iconRight = null,
  type = "button",
  onClick,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      padding: "6px 14px",
      fontSize: "14px",
      height: 34
    },
    md: {
      padding: "10px 20px",
      fontSize: "16px",
      height: 44
    },
    lg: {
      padding: "14px 28px",
      fontSize: "20px",
      height: 52
    }
  };
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    fontFamily: "var(--font-cuerpo)",
    fontWeight: 700,
    lineHeight: 1,
    border: "2px solid transparent",
    borderRadius: "var(--radio-1)",
    cursor: disabled ? "not-allowed" : "pointer",
    transition: "background var(--trans-rapida), color var(--trans-rapida), border-color var(--trans-rapida)",
    textDecoration: "none",
    whiteSpace: "nowrap",
    ...sizes[size]
  };
  const variants = {
    primary: {
      background: "var(--guinda-100)",
      color: "var(--blanco)",
      borderColor: "var(--guinda-100)"
    },
    secondary: {
      background: "transparent",
      color: "var(--dorado-100)",
      borderColor: "var(--dorado-100)"
    },
    tertiary: {
      background: "transparent",
      color: "var(--guinda-100)",
      borderColor: "transparent",
      padding: "10px 8px"
    },
    danger: {
      background: "var(--estado-error)",
      color: "var(--blanco)",
      borderColor: "var(--estado-error)"
    }
  };
  const disabledStyle = disabled ? {
    background: "var(--gris-20)",
    color: "var(--gris-60)",
    borderColor: "var(--gris-20)"
  } : {};
  const [hover, setHover] = React.useState(false);
  const hoverStyle = !disabled && hover ? hoverFor(variant) : {};
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      ...base,
      ...variants[variant],
      ...disabledStyle,
      ...hoverStyle,
      ...style
    }
  }, rest), iconLeft, children, iconRight);
}
function hoverFor(variant) {
  switch (variant) {
    case "primary":
      return {
        background: "var(--guinda-oscuro)",
        borderColor: "var(--guinda-oscuro)"
      };
    case "secondary":
      return {
        background: "var(--dorado-20)"
      };
    case "tertiary":
      return {
        background: "var(--guinda-20)"
      };
    case "danger":
      return {
        background: "#C2063F",
        borderColor: "#C2063F"
      };
    default:
      return {};
  }
}
Object.assign(__ds_scope, { Boton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Boton.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card institucional SEDEMA.
 * Fondo blanco o marfil, sombra suave o borde, con pleca de acento opcional.
 */
function Card({
  children,
  surface = "blanco",
  // blanco | marfil
  pleca = null,
  // null | "guinda" | "dorado"
  bordered = false,
  padding = "var(--esp-4)",
  style = {},
  ...rest
}) {
  const surfaces = {
    blanco: "var(--blanco)",
    marfil: "var(--marfil)"
  };
  const plecaColor = pleca === "guinda" ? "var(--guinda-100)" : pleca === "dorado" ? "var(--dorado-100)" : null;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: surfaces[surface] || surfaces.blanco,
      borderRadius: "var(--radio-2)",
      boxShadow: bordered ? "none" : "var(--sombra-1)",
      border: bordered ? "1px solid var(--gris-20)" : "none",
      borderTop: plecaColor ? `4px solid ${plecaColor}` : undefined,
      overflow: "hidden",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      padding
    }
  }, children));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Firma.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Firma institucional SEDEMA (lockup del logotipo).
 * Coloca EXCLUSIVAMENTE el activo SVG cargado — nunca redibuja ni recolorea.
 * Pasa `src` con la ruta del SVG según la versión (color sobre claro, gris a 1 tinta).
 */
function Firma({
  variant = "color",
  // color | gris
  src,
  height = 56,
  protected: withGuard = false,
  // muestra el área de protección
  style = {},
  ...rest
}) {
  const fallback = variant === "gris" ? "assets/logos/firma-sedema-gris.svg" : "assets/logos/firma-sedema-color.svg";
  const url = src || fallback;
  const img = /*#__PURE__*/React.createElement("img", {
    src: url,
    alt: "Gobierno de la Ciudad de M\xE9xico \xB7 Secretar\xEDa del Medio Ambiente",
    style: {
      display: "block",
      height: `${height}px`,
      width: "auto"
    }
  });
  if (!withGuard) {
    return /*#__PURE__*/React.createElement("span", _extends({
      style: {
        display: "inline-block",
        ...style
      }
    }, rest), img);
  }

  // Área de protección ≈ altura de la "O" de "México" (aprox. 22% de la altura de la firma)
  const guard = Math.round(height * 0.22);
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-block",
      padding: `${guard}px`,
      outline: "1px dashed var(--dorado-80)",
      ...style
    }
  }, rest), img);
}
Object.assign(__ds_scope, { Firma });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Firma.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Botón de ícono (acción compacta). Pasa un ícono Lucide como children.
 */
function IconButton({
  children,
  label,
  variant = "ghost",
  // ghost | solid | outline
  size = "md",
  disabled = false,
  onClick,
  style = {},
  ...rest
}) {
  const dims = {
    sm: 32,
    md: 44,
    lg: 52
  }[size] || 44;
  const variants = {
    ghost: {
      background: "transparent",
      color: "var(--guinda-100)",
      border: "2px solid transparent"
    },
    solid: {
      background: "var(--guinda-100)",
      color: "var(--blanco)",
      border: "2px solid var(--guinda-100)"
    },
    outline: {
      background: "transparent",
      color: "var(--dorado-100)",
      border: "2px solid var(--dorado-100)"
    }
  };
  const [hover, setHover] = React.useState(false);
  const hoverBg = {
    ghost: "var(--guinda-20)",
    solid: "var(--guinda-oscuro)",
    outline: "var(--dorado-20)"
  }[variant];
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    title: label,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: dims,
      height: dims,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "var(--radio-1)",
      cursor: disabled ? "not-allowed" : "pointer",
      transition: "background var(--trans-rapida)",
      ...variants[variant],
      ...(hover && !disabled ? {
        background: hoverBg
      } : {}),
      ...(disabled ? {
        color: "var(--gris-60)",
        background: "var(--gris-10)",
        borderColor: "var(--gris-10)"
      } : {}),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tag / chip de categoría. Opcionalmente removible.
 */
function Tag({
  children,
  onRemove = null,
  color = "dorado",
  style = {},
  ...rest
}) {
  const colors = {
    dorado: {
      fg: "var(--cafe)",
      bd: "var(--dorado-80)"
    },
    guinda: {
      fg: "var(--guinda-oscuro)",
      bd: "var(--guinda-60)"
    },
    gris: {
      fg: "var(--gris-100)",
      bd: "var(--gris-40)"
    }
  };
  const c = colors[color] || colors.dorado;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "6px",
      fontFamily: "var(--font-cuerpo)",
      fontSize: "13px",
      fontWeight: 500,
      lineHeight: 1,
      padding: "6px 10px",
      borderRadius: "var(--radio-completo)",
      background: "var(--blanco)",
      color: c.fg,
      border: `1px solid ${c.bd}`,
      ...style
    }
  }, rest), children, onRemove && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Quitar",
    onClick: onRemove,
    style: {
      border: "none",
      background: "transparent",
      color: "inherit",
      cursor: "pointer",
      fontSize: "15px",
      lineHeight: 1,
      padding: 0,
      display: "inline-flex"
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Mensaje de alerta / aviso institucional.
 * tone: info | exito | alerta | error
 */
function Alert({
  children,
  title = null,
  tone = "info",
  onClose = null,
  icon = null,
  style = {},
  ...rest
}) {
  const tones = {
    info: {
      bg: "#E2EDF7",
      bd: "var(--azul)",
      fg: "var(--azul)"
    },
    exito: {
      bg: "#E1F2E8",
      bd: "var(--estado-exito)",
      fg: "var(--estado-exito)"
    },
    alerta: {
      bg: "#FFF4CF",
      bd: "var(--amarillo)",
      fg: "var(--cafe)"
    },
    error: {
      bg: "#FCE0E8",
      bd: "var(--estado-error)",
      fg: "var(--estado-error)"
    }
  };
  const t = tones[tone] || tones.info;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status",
    style: {
      display: "flex",
      gap: "12px",
      background: t.bg,
      borderLeft: `4px solid ${t.bd}`,
      borderRadius: "var(--radio-1)",
      padding: "14px 16px",
      fontFamily: "var(--font-cuerpo)",
      ...style
    }
  }, rest), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      color: t.fg,
      flex: "none",
      lineHeight: 1.4
    }
  }, icon), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: "16px",
      color: "var(--gris-100)",
      marginBottom: "2px"
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "15px",
      color: "var(--gris-100)"
    }
  }, children)), onClose && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Cerrar",
    onClick: onClose,
    style: {
      border: "none",
      background: "transparent",
      color: "var(--gris-80)",
      cursor: "pointer",
      fontSize: "18px",
      lineHeight: 1,
      padding: 0,
      flex: "none"
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Casilla de verificación institucional. */
function Checkbox({
  label,
  checked,
  onChange,
  disabled = false,
  id,
  style = {},
  ...rest
}) {
  const cid = id || `chk-${Math.random().toString(36).slice(2, 8)}`;
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: cid,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "10px",
      fontFamily: "var(--font-cuerpo)",
      fontSize: "16px",
      color: disabled ? "var(--gris-60)" : "var(--gris-100)",
      cursor: disabled ? "not-allowed" : "pointer",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: "20px",
      height: "20px",
      flex: "none",
      borderRadius: "var(--radio-1)",
      border: `2px solid ${checked ? "var(--guinda-100)" : "var(--gris-40)"}`,
      background: checked ? "var(--guinda-100)" : "var(--blanco)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "all var(--trans-rapida)"
    }
  }, checked && /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2 6.5L4.8 9.2L10 3.5",
    stroke: "white",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), /*#__PURE__*/React.createElement("input", _extends({
    id: cid,
    type: "checkbox",
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Campo de texto institucional con etiqueta, ayuda y estado de error.
 */
function Input({
  label,
  id,
  type = "text",
  placeholder = "",
  value,
  onChange,
  help = null,
  error = null,
  disabled = false,
  required = false,
  style = {},
  ...rest
}) {
  const inputId = id || `inp-${Math.random().toString(36).slice(2, 8)}`;
  const [focus, setFocus] = React.useState(false);
  const borderColor = error ? "var(--estado-error)" : focus ? "var(--guinda-100)" : "var(--gris-40)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "6px",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: "var(--font-cuerpo)",
      fontSize: "14px",
      fontWeight: 700,
      color: "var(--gris-100)"
    }
  }, label, " ", required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--estado-error)"
    }
  }, "*")), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    type: type,
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      fontFamily: "var(--font-cuerpo)",
      fontSize: "16px",
      color: "var(--gris-100)",
      padding: "10px 12px",
      height: "44px",
      background: disabled ? "var(--gris-10)" : "var(--blanco)",
      border: `1px solid ${borderColor}`,
      borderRadius: "var(--radio-1)",
      outline: "none",
      boxShadow: focus && !error ? "var(--sombra-foco)" : "none",
      transition: "border-color var(--trans-rapida), box-shadow var(--trans-rapida)"
    }
  }, rest)), error ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "13px",
      color: "var(--estado-error)"
    }
  }, error) : help ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "13px",
      color: "var(--gris-80)"
    }
  }, help) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Radio button institucional. */
function Radio({
  label,
  checked,
  onChange,
  name,
  value,
  disabled = false,
  id,
  style = {},
  ...rest
}) {
  const rid = id || `rad-${Math.random().toString(36).slice(2, 8)}`;
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: rid,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "10px",
      fontFamily: "var(--font-cuerpo)",
      fontSize: "16px",
      color: disabled ? "var(--gris-60)" : "var(--gris-100)",
      cursor: disabled ? "not-allowed" : "pointer",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: "20px",
      height: "20px",
      flex: "none",
      borderRadius: "var(--radio-completo)",
      border: `2px solid ${checked ? "var(--guinda-100)" : "var(--gris-40)"}`,
      background: "var(--blanco)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "all var(--trans-rapida)"
    }
  }, checked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: "10px",
      height: "10px",
      borderRadius: "var(--radio-completo)",
      background: "var(--guinda-100)"
    }
  })), /*#__PURE__*/React.createElement("input", _extends({
    id: rid,
    type: "radio",
    name: name,
    value: value,
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), label);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Lista desplegable institucional. options: [{value,label}] o strings. */
function Select({
  label,
  id,
  value,
  onChange,
  options = [],
  placeholder = "Selecciona una opción",
  disabled = false,
  error = null,
  style = {},
  ...rest
}) {
  const selId = id || `sel-${Math.random().toString(36).slice(2, 8)}`;
  const [focus, setFocus] = React.useState(false);
  const norm = options.map(o => typeof o === "string" ? {
    value: o,
    label: o
  } : o);
  const borderColor = error ? "var(--estado-error)" : focus ? "var(--guinda-100)" : "var(--gris-40)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "6px",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: selId,
    style: {
      fontFamily: "var(--font-cuerpo)",
      fontSize: "14px",
      fontWeight: 700,
      color: "var(--gris-100)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: selId,
    value: value,
    onChange: onChange,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      appearance: "none",
      WebkitAppearance: "none",
      width: "100%",
      fontFamily: "var(--font-cuerpo)",
      fontSize: "16px",
      color: value ? "var(--gris-100)" : "var(--gris-60)",
      padding: "10px 36px 10px 12px",
      height: "44px",
      background: disabled ? "var(--gris-10)" : "var(--blanco)",
      border: `1px solid ${borderColor}`,
      borderRadius: "var(--radio-1)",
      outline: "none",
      boxShadow: focus && !error ? "var(--sombra-foco)" : "none",
      cursor: disabled ? "not-allowed" : "pointer"
    }
  }, rest), /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder), norm.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      right: "12px",
      top: "50%",
      transform: "translateY(-50%)",
      pointerEvents: "none",
      color: "var(--gris-80)"
    }
  }, "\u25BE")), error && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "13px",
      color: "var(--estado-error)"
    }
  }, error));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Interruptor (switch) institucional. */
function Switch({
  label,
  checked,
  onChange,
  disabled = false,
  id,
  style = {},
  ...rest
}) {
  const sid = id || `sw-${Math.random().toString(36).slice(2, 8)}`;
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: sid,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "12px",
      fontFamily: "var(--font-cuerpo)",
      fontSize: "16px",
      color: disabled ? "var(--gris-60)" : "var(--gris-100)",
      cursor: disabled ? "not-allowed" : "pointer",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: "44px",
      height: "24px",
      flex: "none",
      borderRadius: "var(--radio-completo)",
      background: checked ? "var(--guinda-100)" : "var(--gris-40)",
      position: "relative",
      transition: "background var(--trans-media)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: "2px",
      left: checked ? "22px" : "2px",
      width: "20px",
      height: "20px",
      borderRadius: "var(--radio-completo)",
      background: "var(--blanco)",
      boxShadow: "0 1px 2px rgba(0,0,0,0.3)",
      transition: "left var(--trans-media)"
    }
  })), /*#__PURE__*/React.createElement("input", _extends({
    id: sid,
    type: "checkbox",
    role: "switch",
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumb.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Migas de pan institucionales. items: [{label, href}]. */
function Breadcrumb({
  items = [],
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({
    "aria-label": "Ruta",
    style: {
      fontFamily: "var(--font-cuerpo)",
      fontSize: "14px",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("ol", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      gap: "8px",
      listStyle: "none",
      margin: 0,
      padding: 0
    }
  }, items.map((it, i) => {
    const last = i === items.length - 1;
    return /*#__PURE__*/React.createElement("li", {
      key: i,
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: "8px"
      }
    }, last || !it.href ? /*#__PURE__*/React.createElement("span", {
      style: {
        color: last ? "var(--gris-100)" : "var(--gris-80)",
        fontWeight: last ? 700 : 400
      }
    }, it.label) : /*#__PURE__*/React.createElement("a", {
      href: it.href,
      style: {
        color: "var(--guinda-100)",
        textDecoration: "none"
      }
    }, it.label), !last && /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--gris-60)"
      }
    }, "/"));
  })));
}
Object.assign(__ds_scope, { Breadcrumb });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumb.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Pestañas institucionales. tabs: [{id,label}]. Subrayado guinda en la activa.
 */
function Tabs({
  tabs = [],
  active,
  onChange,
  style = {},
  ...rest
}) {
  const [internal, setInternal] = React.useState(active ?? (tabs[0] && tabs[0].id));
  const current = active !== undefined ? active : internal;
  const select = id => {
    if (active === undefined) setInternal(id);
    onChange && onChange(id);
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: "flex",
      gap: "4px",
      borderBottom: "1px solid var(--gris-20)",
      ...style
    }
  }, rest), tabs.map(t => {
    const on = t.id === current;
    return /*#__PURE__*/React.createElement("button", {
      key: t.id,
      role: "tab",
      "aria-selected": on,
      onClick: () => select(t.id),
      style: {
        fontFamily: "var(--font-cuerpo)",
        fontSize: "16px",
        fontWeight: on ? 700 : 500,
        color: on ? "var(--guinda-100)" : "var(--gris-80)",
        background: "transparent",
        border: "none",
        borderBottom: `3px solid ${on ? "var(--guinda-100)" : "transparent"}`,
        padding: "12px 16px",
        marginBottom: "-1px",
        cursor: "pointer",
        transition: "color var(--trans-rapida), border-color var(--trans-rapida)"
      }
    }, t.label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/Content.jsx
try { (() => {
// Contenido del panel: KPIs, gráfica simple y tabla de estaciones
function DashContent() {
  const {
    Card,
    Badge,
    Boton,
    Tabs
  } = window.SEDEMADesignSystem_22c075;
  const [tab, setTab] = React.useState("hoy");
  const kpis = [{
    l: "Índice AIRE actual",
    v: "48",
    u: "Bueno",
    tone: "exito",
    icon: "wind"
  }, {
    l: "PM2.5 (24 h)",
    v: "18",
    u: "µg/m³",
    tone: "info",
    icon: "activity"
  }, {
    l: "Ozono O₃ máx.",
    v: "62",
    u: "ppb",
    tone: "alerta",
    icon: "sun"
  }, {
    l: "Estaciones activas",
    v: "34 / 34",
    u: "en línea",
    tone: "exito",
    icon: "radio"
  }];

  // Serie de barras (índice por hora) — valores 0..100
  const serie = [38, 42, 40, 45, 52, 60, 64, 58, 50, 47, 44, 48];
  const horas = ["00", "02", "04", "06", "08", "10", "12", "14", "16", "18", "20", "22"];
  const estaciones = [{
    n: "Merced",
    a: "Cuauhtémoc",
    i: 44,
    e: "Bueno",
    tone: "exito"
  }, {
    n: "Pedregal",
    a: "Álvaro Obregón",
    i: 51,
    e: "Regular",
    tone: "alerta"
  }, {
    n: "Xalostoc",
    a: "Ecatepec",
    i: 78,
    e: "Mala",
    tone: "error"
  }, {
    n: "UAM Iztapalapa",
    a: "Iztapalapa",
    i: 49,
    e: "Bueno",
    tone: "exito"
  }, {
    n: "Camarones",
    a: "Azcapotzalco",
    i: 56,
    e: "Regular",
    tone: "alerta"
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "24px",
      display: "flex",
      flexDirection: "column",
      gap: "24px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "20px"
    }
  }, kpis.map(k => /*#__PURE__*/React.createElement(Card, {
    key: k.l,
    bordered: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "13px",
      color: "var(--gris-80)",
      maxWidth: "16ch"
    }
  }, k.l), /*#__PURE__*/React.createElement("i", {
    "data-lucide": k.icon,
    style: {
      width: 20,
      height: 20,
      color: "var(--dorado-100)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: "8px",
      margin: "10px 0 8px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-cuerpo)",
      fontSize: "34px",
      fontWeight: 700,
      color: "var(--guinda-100)",
      lineHeight: 1
    }
  }, k.v), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "14px",
      color: "var(--gris-80)"
    }
  }, k.u)), /*#__PURE__*/React.createElement(Badge, {
    tone: k.tone
  }, k.u === "en línea" ? "Operando" : k.l.includes("Índice") ? "Calidad buena" : k.tone === "alerta" ? "Vigilar" : "Normal")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.6fr 1fr",
      gap: "20px",
      alignItems: "stretch"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    bordered: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "16px"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-cuerpo)",
      fontSize: "18px",
      fontWeight: 700,
      color: "var(--gris-100)",
      margin: 0
    }
  }, "\xCDndice AIRE por hora"), /*#__PURE__*/React.createElement(Tabs, {
    tabs: [{
      id: "hoy",
      label: "Hoy"
    }, {
      id: "semana",
      label: "Semana"
    }],
    active: tab,
    onChange: setTab,
    style: {
      borderBottom: "none"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      gap: "10px",
      height: 200,
      paddingTop: 8
    }
  }, serie.map((v, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "6px",
      height: "100%",
      justifyContent: "flex-end"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      height: `${v}%`,
      background: v >= 70 ? "var(--estado-error)" : v >= 50 ? "var(--amarillo)" : "var(--guinda-100)",
      borderRadius: "2px 2px 0 0"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "11px",
      color: "var(--gris-80)"
    }
  }, horas[i]))))), /*#__PURE__*/React.createElement(Card, {
    bordered: true
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-cuerpo)",
      fontSize: "18px",
      fontWeight: 700,
      color: "var(--gris-100)",
      margin: "0 0 14px"
    }
  }, "Contingencia"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "12px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--marfil)",
      borderTop: "4px solid var(--dorado-100)",
      padding: "14px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "13px",
      color: "var(--gris-80)"
    }
  }, "Estado del programa"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "20px",
      fontWeight: 700,
      color: "var(--guinda-100)",
      marginTop: "4px"
    }
  }, "Sin contingencia")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "14px",
      color: "var(--gris-80)",
      lineHeight: 1.5,
      margin: 0
    }
  }, "No se prev\xE9 activaci\xF3n de Fase I en las pr\xF3ximas 24 horas seg\xFAn el pron\xF3stico atmosf\xE9rico."), /*#__PURE__*/React.createElement(Boton, {
    variant: "secondary",
    size: "sm"
  }, "Ver protocolo")))), /*#__PURE__*/React.createElement(Card, {
    bordered: true,
    padding: "0"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px 20px",
      borderBottom: "1px solid var(--gris-20)",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-cuerpo)",
      fontSize: "18px",
      fontWeight: 700,
      color: "var(--gris-100)",
      margin: 0
    }
  }, "Estaciones de monitoreo"), /*#__PURE__*/React.createElement(Boton, {
    variant: "tertiary",
    size: "sm"
  }, "Descargar el informe")), /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse",
      fontFamily: "var(--font-cuerpo)"
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      textAlign: "left",
      fontSize: "12px",
      textTransform: "uppercase",
      letterSpacing: "0.04em",
      color: "var(--gris-80)"
    }
  }, /*#__PURE__*/React.createElement("th", {
    style: {
      padding: "12px 20px",
      fontWeight: 700
    }
  }, "Estaci\xF3n"), /*#__PURE__*/React.createElement("th", {
    style: {
      padding: "12px 20px",
      fontWeight: 700
    }
  }, "Alcald\xEDa"), /*#__PURE__*/React.createElement("th", {
    style: {
      padding: "12px 20px",
      fontWeight: 700
    }
  }, "\xCDndice"), /*#__PURE__*/React.createElement("th", {
    style: {
      padding: "12px 20px",
      fontWeight: 700
    }
  }, "Estado"))), /*#__PURE__*/React.createElement("tbody", null, estaciones.map((s, i) => /*#__PURE__*/React.createElement("tr", {
    key: s.n,
    style: {
      borderTop: "1px solid var(--gris-20)",
      fontSize: "15px",
      color: "var(--gris-100)"
    }
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "13px 20px",
      fontWeight: 500
    }
  }, s.n), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "13px 20px",
      color: "var(--gris-80)"
    }
  }, s.a), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "13px 20px",
      fontWeight: 700
    }
  }, s.i), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "13px 20px"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: s.tone
  }, s.e))))))));
}
window.DashContent = DashContent;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/Content.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/Sidebar.jsx
try { (() => {
// Barra lateral del dashboard ambiental
function DashSidebar({
  current,
  onNav
}) {
  const items = [{
    id: "panel",
    icon: "layout-dashboard",
    label: "Panel"
  }, {
    id: "aire",
    icon: "wind",
    label: "Calidad del aire"
  }, {
    id: "agua",
    icon: "droplets",
    label: "Agua"
  }, {
    id: "arbolado",
    icon: "trees",
    label: "Arbolado"
  }, {
    id: "reportes",
    icon: "file-text",
    label: "Reportes"
  }, {
    id: "config",
    icon: "settings",
    label: "Configuración"
  }];
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 248,
      flex: "none",
      background: "var(--guinda-100)",
      color: "#fff",
      display: "flex",
      flexDirection: "column",
      minHeight: "100%"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "20px 20px 16px",
      borderBottom: "1px solid rgba(255,255,255,0.18)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-firma)",
      fontWeight: 700,
      fontSize: "18px",
      letterSpacing: "0.02em"
    }
  }, "SEDEMA"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "12px",
      color: "var(--dorado-40)",
      marginTop: "2px"
    }
  }, "Tablero ambiental")), /*#__PURE__*/React.createElement("nav", {
    style: {
      padding: "12px 12px",
      display: "flex",
      flexDirection: "column",
      gap: "2px",
      flex: 1
    }
  }, items.map(it => {
    const on = current === it.id;
    return /*#__PURE__*/React.createElement("button", {
      key: it.id,
      onClick: () => onNav && onNav(it.id),
      style: {
        display: "flex",
        alignItems: "center",
        gap: "12px",
        padding: "11px 12px",
        border: "none",
        cursor: "pointer",
        borderRadius: "var(--radio-1)",
        textAlign: "left",
        fontFamily: "var(--font-cuerpo)",
        fontSize: "15px",
        fontWeight: on ? 700 : 500,
        color: "#fff",
        background: on ? "rgba(255,255,255,0.16)" : "transparent"
      }
    }, /*#__PURE__*/React.createElement("i", {
      "data-lucide": it.icon,
      style: {
        width: 18,
        height: 18
      }
    }), it.label);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px 20px",
      borderTop: "1px solid rgba(255,255,255,0.18)",
      fontSize: "12px",
      color: "rgba(255,255,255,0.7)"
    }
  }, "Borrador de trabajo \xB7 requiere autorizaci\xF3n"));
}
window.DashSidebar = DashSidebar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/Sidebar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/Topbar.jsx
try { (() => {
// Barra superior del dashboard
function DashTopbar() {
  const {
    IconButton
  } = window.SEDEMADesignSystem_22c075;
  return /*#__PURE__*/React.createElement("header", {
    style: {
      height: 64,
      flex: "none",
      background: "#fff",
      borderBottom: "1px solid var(--gris-20)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 24px"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-cuerpo)",
      fontSize: "20px",
      fontWeight: 700,
      color: "var(--gris-100)"
    }
  }, "Calidad del aire"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "13px",
      color: "var(--gris-80)"
    }
  }, "Valle de M\xE9xico \xB7 actualizado 10 h")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "10px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      border: "1px solid var(--gris-40)",
      borderRadius: "var(--radio-1)",
      padding: "0 12px",
      height: 40,
      width: 240
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "search",
    style: {
      width: 16,
      height: 16,
      color: "var(--gris-80)"
    }
  }), /*#__PURE__*/React.createElement("input", {
    placeholder: "Buscar estaci\xF3n\u2026",
    style: {
      border: "none",
      outline: "none",
      flex: 1,
      fontFamily: "var(--font-cuerpo)",
      fontSize: "14px",
      color: "var(--gris-100)"
    }
  })), /*#__PURE__*/React.createElement(IconButton, {
    label: "Notificaciones",
    variant: "ghost"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "bell",
    style: {
      width: 18,
      height: 18
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: "var(--radio-completo)",
      background: "var(--dorado-100)",
      color: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: 700,
      fontSize: "14px"
    }
  }, "RM")));
}
window.DashTopbar = DashTopbar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/Topbar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/micrositio/Footer.jsx
try { (() => {
// Pie institucional con firma y enlaces de gobierno
function MicroFooter() {
  const {
    Firma
  } = window.SEDEMADesignSystem_22c075;
  const cols = [{
    h: "La Secretaría",
    links: ["Quiénes somos", "Estructura", "Directorio", "Marco normativo"]
  }, {
    h: "Trámites y servicios",
    links: ["Reporte ciudadano", "Poda y derribo", "Permisos ambientales", "Consultas"]
  }, {
    h: "Transparencia",
    links: ["Obligaciones", "Datos abiertos", "Avisos de privacidad", "Contrataciones"]
  }];
  return /*#__PURE__*/React.createElement("footer", null, /*#__PURE__*/React.createElement("hr", {
    className: "ds-pleca-dorada",
    style: {
      margin: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--guinda-100)",
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--contenedor-max)",
      margin: "0 auto",
      padding: "48px 24px",
      display: "grid",
      gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
      gap: "32px"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#fff",
      display: "inline-block",
      padding: "14px 16px",
      borderRadius: "var(--radio-1)"
    }
  }, /*#__PURE__*/React.createElement(Firma, {
    variant: "color",
    src: "../../assets/logos/firma-sedema-color.svg",
    height: 44
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "14px",
      color: "rgba(255,255,255,0.8)",
      marginTop: "16px",
      maxWidth: "34ch",
      lineHeight: 1.5
    }
  }, "Plaza de la Constituci\xF3n 1, Centro Hist\xF3rico, Cuauht\xE9moc, Ciudad de M\xE9xico."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "14px",
      color: "rgba(255,255,255,0.8)",
      margin: "8px 0 0"
    }
  }, "55 0000 0000")), cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.h
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontSize: "15px",
      fontWeight: 700,
      margin: "0 0 14px",
      color: "#fff"
    }
  }, c.h), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      padding: 0,
      margin: 0,
      display: "flex",
      flexDirection: "column",
      gap: "10px"
    }
  }, c.links.map(l => /*#__PURE__*/React.createElement("li", {
    key: l
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: "rgba(255,255,255,0.85)",
      textDecoration: "none",
      fontSize: "14px"
    }
  }, l))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid rgba(255,255,255,0.2)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--contenedor-max)",
      margin: "0 auto",
      padding: "16px 24px",
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: "12px",
      fontSize: "13px",
      color: "rgba(255,255,255,0.75)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "Gobierno de la Ciudad de M\xE9xico \xB7 2024\u20132030"), /*#__PURE__*/React.createElement("span", null, "Aviso de privacidad \xB7 T\xE9rminos \xB7 Accesibilidad")))));
}
window.MicroFooter = MicroFooter;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/micrositio/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/micrositio/Header.jsx
try { (() => {
// Encabezado institucional: barra GCDMX + firma SEDEMA + navegación
function MicroHeader({
  onNav,
  current
}) {
  const {
    Firma
  } = window.SEDEMADesignSystem_22c075;
  const nav = [{
    id: "inicio",
    label: "Inicio"
  }, {
    id: "programas",
    label: "programas"
  }, {
    id: "tramites",
    label: "Trámites"
  }, {
    id: "aire",
    label: "Calidad del aire"
  }, {
    id: "transparencia",
    label: "Transparencia"
  }];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 20,
      background: "#fff"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--guinda-100)",
      color: "#fff",
      fontSize: "13px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--contenedor-max)",
      margin: "0 auto",
      padding: "6px 24px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: 0.9
    }
  }, "Gobierno de la Ciudad de M\xE9xico"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "18px",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: "#fff",
      textDecoration: "none"
    }
  }, "gob.cdmx"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: "#fff",
      textDecoration: "none"
    }
  }, "Contacto"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: "#fff",
      textDecoration: "none",
      display: "inline-flex",
      gap: "6px",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "accessibility",
    style: {
      width: 16,
      height: 16
    }
  }), " Accesibilidad")))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--contenedor-max)",
      margin: "0 auto",
      padding: "16px 24px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "24px"
    }
  }, /*#__PURE__*/React.createElement(Firma, {
    variant: "color",
    src: "../../assets/logos/firma-sedema-color.svg",
    height: 52
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      flex: "0 1 360px",
      border: "1px solid var(--gris-40)",
      borderRadius: "var(--radio-1)",
      padding: "0 12px",
      height: 44
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "search",
    style: {
      width: 18,
      height: 18,
      color: "var(--gris-80)"
    }
  }), /*#__PURE__*/React.createElement("input", {
    placeholder: "Buscar tr\xE1mites, programas\u2026",
    style: {
      border: "none",
      outline: "none",
      flex: 1,
      fontFamily: "var(--font-cuerpo)",
      fontSize: "15px",
      color: "var(--gris-100)"
    }
  }))), /*#__PURE__*/React.createElement("nav", {
    style: {
      borderTop: "1px solid var(--gris-20)",
      borderBottom: "3px solid var(--dorado-100)",
      background: "#fff"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--contenedor-max)",
      margin: "0 auto",
      padding: "0 24px",
      display: "flex",
      gap: "4px"
    }
  }, nav.map(n => {
    const on = current === n.id;
    return /*#__PURE__*/React.createElement("button", {
      key: n.id,
      onClick: () => onNav && onNav(n.id),
      style: {
        background: "transparent",
        border: "none",
        padding: "14px 16px",
        cursor: "pointer",
        fontFamily: "var(--font-cuerpo)",
        fontSize: "15px",
        fontWeight: on ? 700 : 500,
        color: on ? "var(--guinda-100)" : "var(--gris-100)",
        borderBottom: `3px solid ${on ? "var(--guinda-100)" : "transparent"}`,
        marginBottom: "-3px"
      }
    }, n.label);
  }))));
}
window.MicroHeader = MicroHeader;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/micrositio/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/micrositio/Hero.jsx
try { (() => {
// Hero institucional: bloque guinda con título y CTA + área de imagen
function MicroHero() {
  const {
    Boton
  } = window.SEDEMADesignSystem_22c075;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--guinda-100)",
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--contenedor-max)",
      margin: "0 auto",
      padding: "0 24px",
      display: "grid",
      gridTemplateColumns: "1.1fr 1fr",
      alignItems: "stretch",
      gap: "0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "56px 48px 56px 0",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "13px",
      fontWeight: 700,
      letterSpacing: "0.06em",
      textTransform: "uppercase",
      color: "var(--dorado-40)"
    }
  }, "Secretar\xEDa del Medio Ambiente"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-cuerpo)",
      fontSize: "44px",
      fontWeight: 700,
      lineHeight: 1.1,
      margin: "12px 0 16px"
    }
  }, "Una ciudad que respira mejor"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "20px",
      lineHeight: 1.5,
      color: "rgba(255,255,255,0.88)",
      margin: "0 0 28px",
      maxWidth: "46ch"
    }
  }, "Restauramos barrancas, ampliamos el arbolado urbano y cuidamos el suelo de conservaci\xF3n de la Ciudad de M\xE9xico."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "12px",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Boton, {
    variant: "secondary",
    style: {
      borderColor: "#fff",
      color: "#fff"
    }
  }, "Conocer los programas"), /*#__PURE__*/React.createElement(Boton, {
    variant: "tertiary",
    style: {
      color: "#fff"
    }
  }, "Reportar un \xE1rbol en riesgo"))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--guinda-oscuro)",
      minHeight: "340px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: "10px",
      borderLeft: "4px solid var(--dorado-100)"
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "image",
    style: {
      width: 40,
      height: 40,
      color: "var(--dorado-60)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "13px",
      color: "var(--dorado-40)"
    }
  }, "Fotograf\xEDa documental \xB7 \xE1reas verdes CDMX"))));
}
window.MicroHero = MicroHero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/micrositio/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/micrositio/NewsSection.jsx
try { (() => {
// Franja de indicadores + noticias institucionales
function NewsSection() {
  const {
    Badge
  } = window.SEDEMADesignSystem_22c075;
  const indicadores = [{
    v: "320 mil",
    l: "árboles plantados"
  }, {
    v: "59%",
    l: "suelo de conservación"
  }, {
    v: "2 mil 300",
    l: "hectáreas restauradas"
  }, {
    v: "18",
    l: "áreas naturales protegidas"
  }];
  const noticias = [{
    tag: "Calidad del aire",
    tone: "info",
    t: "Se mantiene buena calidad del aire en el valle de México",
    f: "12 junio 2026"
  }, {
    tag: "Reforestación",
    tone: "exito",
    t: "Concluye la temporada de plantación con 45 mil árboles nuevos",
    f: "9 junio 2026"
  }, {
    tag: "Biodiversidad",
    tone: "dorado",
    t: "Registran avistamiento de ajolote en canales de Xochimilco",
    f: "3 junio 2026"
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--marfil)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--contenedor-max)",
      margin: "0 auto",
      padding: "48px 24px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "20px",
      marginBottom: "48px"
    }
  }, indicadores.map(i => /*#__PURE__*/React.createElement("div", {
    key: i.l,
    style: {
      borderTop: "4px solid var(--guinda-100)",
      paddingTop: "14px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-cuerpo)",
      fontSize: "40px",
      fontWeight: 700,
      color: "var(--guinda-100)",
      lineHeight: 1
    }
  }, i.v), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "15px",
      color: "var(--gris-80)",
      marginTop: "6px"
    }
  }, i.l)))), /*#__PURE__*/React.createElement("hr", {
    className: "ds-pleca-dorada",
    style: {
      width: 48,
      margin: "0 0 12px"
    }
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-cuerpo)",
      fontSize: "32px",
      fontWeight: 700,
      color: "var(--guinda-100)",
      margin: "0 0 24px"
    }
  }, "Boletines recientes"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "20px"
    }
  }, noticias.map(n => /*#__PURE__*/React.createElement("article", {
    key: n.t,
    style: {
      background: "#fff",
      borderRadius: "var(--radio-2)",
      overflow: "hidden",
      boxShadow: "var(--sombra-1)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 140,
      background: "var(--gris-10)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "image",
    style: {
      width: 32,
      height: 32,
      color: "var(--gris-60)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: n.tone
  }, n.tag), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-cuerpo)",
      fontSize: "18px",
      fontWeight: 700,
      color: "var(--gris-100)",
      margin: "10px 0 8px",
      lineHeight: 1.25
    }
  }, n.t), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "13px",
      color: "var(--gris-80)"
    }
  }, n.f)))))));
}
window.NewsSection = NewsSection;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/micrositio/NewsSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/micrositio/ProgramGrid.jsx
try { (() => {
// Cuadrícula de programas y acceso a trámites
function ProgramGrid() {
  const {
    Card,
    Boton
  } = window.SEDEMADesignSystem_22c075;
  const programas = [{
    icon: "trees",
    t: "Reforestación urbana",
    d: "Plantación y mantenimiento de arbolado en calles, parques y camellones."
  }, {
    icon: "droplets",
    t: "Restauración de barrancas",
    d: "Recuperación de cauces y vegetación nativa en el poniente de la ciudad."
  }, {
    icon: "wind",
    t: "Calidad del aire",
    d: "Monitoreo y programa para contingencias ambientales atmosféricas."
  }, {
    icon: "sprout",
    t: "Suelo de conservación",
    d: "Protección del 59% del territorio: bosques, milpa y recarga de acuíferos."
  }, {
    icon: "recycle",
    t: "Economía circular",
    d: "Separación de residuos y aprovechamiento de orgánicos."
  }, {
    icon: "bird",
    t: "Biodiversidad",
    d: "Conservación de fauna y áreas naturales protegidas."
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: "var(--contenedor-max)",
      margin: "0 auto",
      padding: "56px 24px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      marginBottom: "28px"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("hr", {
    className: "ds-pleca-dorada",
    style: {
      width: 48,
      margin: "0 0 12px"
    }
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-cuerpo)",
      fontSize: "32px",
      fontWeight: 700,
      color: "var(--guinda-100)",
      margin: 0
    }
  }, "programas ambientales")), /*#__PURE__*/React.createElement(Boton, {
    variant: "tertiary"
  }, "Ver todos")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "20px"
    }
  }, programas.map(p => /*#__PURE__*/React.createElement(Card, {
    key: p.t,
    bordered: true,
    style: {
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 48,
      height: 48,
      borderRadius: "var(--radio-1)",
      background: "var(--marfil)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: "14px"
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": p.icon,
    style: {
      width: 24,
      height: 24,
      color: "var(--guinda-100)"
    }
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-cuerpo)",
      fontSize: "20px",
      fontWeight: 700,
      color: "var(--gris-100)",
      margin: "0 0 6px"
    }
  }, p.t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "15px",
      color: "var(--gris-80)",
      lineHeight: 1.5,
      margin: "0 0 16px",
      flex: 1
    }
  }, p.d), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: "var(--guinda-100)",
      fontWeight: 700,
      fontSize: "15px",
      textDecoration: "none",
      display: "inline-flex",
      alignItems: "center",
      gap: "6px"
    }
  }, "Consultar el programa ", /*#__PURE__*/React.createElement("i", {
    "data-lucide": "arrow-right",
    style: {
      width: 16,
      height: 16
    }
  }))))));
}
window.ProgramGrid = ProgramGrid;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/micrositio/ProgramGrid.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Banner = __ds_scope.Banner;

__ds_ns.Boton = __ds_scope.Boton;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Firma = __ds_scope.Firma;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Breadcrumb = __ds_scope.Breadcrumb;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
