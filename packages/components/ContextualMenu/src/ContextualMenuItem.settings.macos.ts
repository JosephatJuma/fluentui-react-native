import { contextualMenuItemName, ContextualMenuItemType } from './ContextualMenuItem.types';
import { IComposeSettings } from '@uifabricshared/foundation-compose';

export const settings: IComposeSettings<ContextualMenuItemType> = [
  {
    tokens: {
      backgroundColor: 'menuBackground',
      color: 'menuItemText',
      borderColor: 'transparent',
      borderWidth: 2,
    },
    root: {
      accessible: true,
      accessibilityRole: 'menuitem',
      enableFocusRing: false,
      focusable: true,
      style: {
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'row',
        alignSelf: 'flex-start',
        width: '100%',
        borderRadius: 5,
      },
    },
    content: {},
    icon: { style: { marginEnd: 5 } },
    stack: {
      style: {
        display: 'flex',
        paddingStart: 5,
        paddingEnd: 5,
        alignItems: 'center',
        flexDirection: 'row',
        alignSelf: 'flex-start',

        justifyContent: 'flex-start',
      },
    },
    _precedence: ['focused', 'hovered', 'pressed', 'disabled'],
    _overrides: {
      disabled: {
        tokens: {
          backgroundColor: 'menuBackground',
          color: 'disabledText',
        },
      },
      pressed: {
        tokens: {
          backgroundColor: 'menuItemBackgroundPressed',
          color: 'menuItemTextHovered',
        },
      },
      focused: {
        tokens: {
          color: 'menuItemTextHovered',
          backgroundColor: 'menuItemBackgroundHovered',
        },
      },
    },
  },
  contextualMenuItemName,
];
