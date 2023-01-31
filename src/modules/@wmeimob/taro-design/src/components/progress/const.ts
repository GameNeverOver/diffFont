export type TProgressStatus = 'normal' | 'success' | 'error' | 'warn';

export enum MMProgressInfoPosition {
  /**
   * 最右侧
   */
  Right,
  /**
   * 跟随在进度条后面
   */
  Follow,
  /**
   * 在进度条内部中间
   */
  InnerCenter,
}
