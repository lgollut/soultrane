import { vars } from '../../src/styles/contract.css';
import { responsiveProperties } from '../../src/styles/sprinkles-properties/responsive-properties.css';
import { unconditionalProperties } from '../../src/styles/sprinkles-properties/unconditional-properties.css';

type ArgTypesFromSprinklesProps = {
  props: Record<string, any>;
  excludes?: string[];
  category?: string;
};

const spacingValues = Object.keys(vars.spacing);
const autoSpacingValues = ['auto', ...Object.keys(vars.spacing)];
const radiusValues = Object.keys(vars.radius);
const borderValues = [0, 1];

export const responsivePropertiesMap = {
  display: Object.keys(responsiveProperties.styles.display.values),
  flexWrap: Object.keys(responsiveProperties.styles.flexWrap.values),
  flexDirection: Object.keys(responsiveProperties.styles.flexDirection.values),
  justifyContent: Object.keys(
    responsiveProperties.styles.justifyContent.values,
  ),
  alignItems: Object.keys(responsiveProperties.styles.alignItems.values),
  alignSelf: Object.keys(responsiveProperties.styles.alignSelf.values),
  columnGap: spacingValues,
  rowGap: spacingValues,
  gap: spacingValues,
  flexGrow: Object.keys(responsiveProperties.styles.flexGrow.values),
  flexShrink: Object.keys(responsiveProperties.styles.flexShrink.values),
  flexBasis: Object.keys(responsiveProperties.styles.flexBasis.values),
  width: Object.keys(responsiveProperties.styles.width.values),
  height: Object.keys(responsiveProperties.styles.height.values),
  maxInlineSize: Object.keys(responsiveProperties.styles.maxInlineSize.values),
  margin: autoSpacingValues,
  marginBlock: autoSpacingValues,
  marginInline: autoSpacingValues,
  marginBlockStart: autoSpacingValues,
  marginInlineEnd: autoSpacingValues,
  marginBlockEnd: autoSpacingValues,
  marginInlineStart: autoSpacingValues,
  padding: spacingValues,
  paddingBlock: spacingValues,
  paddingInline: spacingValues,
  paddingBlockStart: spacingValues,
  paddingInlineEnd: spacingValues,
  paddingBlockEnd: spacingValues,
  paddingInlineStart: spacingValues,
  inset: autoSpacingValues,
  insetBlock: autoSpacingValues,
  insetInline: autoSpacingValues,
  insetBlockStart: autoSpacingValues,
  insetInlineEnd: autoSpacingValues,
  insetBlockEnd: autoSpacingValues,
  insetInlineStart: autoSpacingValues,
  borderRadius: radiusValues,
  borderStartEndRadius: radiusValues,
  borderEndEndRadius: radiusValues,
  borderEndStartRadius: radiusValues,
  borderStartStartRadius: radiusValues,
  position: Object.keys(responsiveProperties.styles.position.values),
  textAlign: Object.keys(responsiveProperties.styles.textAlign.values),
};

export const unconditionalPropertiesMap = {
  tintScheme: Object.keys(unconditionalProperties.styles.tintScheme.values),
  boxShadow: Object.keys(unconditionalProperties.styles.boxShadow.values),
  backgroundColor: Object.keys(
    unconditionalProperties.styles.backgroundColor.values,
  ),
  color: Object.keys(unconditionalProperties.styles.color.values),
  border: borderValues,
  borderBlock: borderValues,
  borderInline: borderValues,
  borderBlockStart: borderValues,
  borderInlineEnd: borderValues,
  borderBlockEnd: borderValues,
  borderInlineStart: borderValues,
  link: Object.keys(unconditionalProperties.styles.link.values),
  typography: Object.keys(unconditionalProperties.styles.typography.values),
  textOverflow: Object.keys(unconditionalProperties.styles.textOverflow.values),
};

export function argTypesFromSprinkles({
  props,
  excludes = [],
  category = 'Sprinkles props',
}: ArgTypesFromSprinklesProps) {
  return Object.entries(props).reduce((acc, [name]) => {
    if (Array.isArray(excludes) && excludes.includes(name)) {
      return acc;
    }
    let options = props[name] || [];
    let control = 'select';

    if (options.length === 1 && options[0] === 'true') {
      options.push('false');
      control = 'boolean';
    }

    return {
      ...acc,
      [name]: {
        control,
        options,
        table: { category },
      },
    };
  }, {});
}
