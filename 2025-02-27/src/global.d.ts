export interface AABButtonProps {
  /** The type of button you want to show */
  buttonStyle?: 'primary' | 'secondary' | 'base' | 'action'
  /** The height of the button */
  buttonSize?: 'medium' | 'large'
  /**  To be used when a button needs to be full-width */
  fullWidth?: boolean
  /** To be used when a button needs to have a fluid width */
  fluidWidth?: boolean
  /** The position you want to place your icon */
  iconPosition?: 'left' | 'right'
}

interface EmeraldElement<AABProps> {
  new (): {
    $props: AllowedComponentProps & VNodeProps & AABProps
  }
}

/***
 For Global components, you need to define `GlobalComponents` interface, for example:
 https://github.com/vuejs/core/pull/3399
 */
declare module 'vue' {
  export interface GlobalComponents {
    'aab-button': EmeraldElement<AABButtonProps>
  }
}
