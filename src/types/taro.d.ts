declare namespace Taro {

  interface NavigateToArguments extends navigateTo.Option {
    params?: { [key: string]: any };
  }

  interface RedirectToArguments extends redirectTo.Option {
    params?: { [key: string]: any };
  }

  interface SwitchTabArguments extends switchTab.Option {
    params?: { [key: string]: any };
  }

  interface NavigateBackArguments extends navigateBack.Option {
    params?: { [key: string]: any };
  }

  interface ReLaunchArguments extends reLaunch.Option {
    params?: { [key: string]: any };
  }
  function navigateTo(parameter: NavigateToArguments): Promise<any>;
  function redirectTo(parameter: RedirectToArguments): Promise<any>;
  function switchTab(parameter: SwitchTabArguments): Promise<any>;
  function navigateBack(parameter: NavigateBackArguments): Promise<any>;
  function reLaunch(parameter: ReLaunchArguments): Promise<any>;

}

