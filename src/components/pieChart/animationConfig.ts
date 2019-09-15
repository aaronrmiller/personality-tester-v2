// export const animationDuration = 200;

// type IToFunc = (next: { t: number })  => void;

// interface IAnimationConfig {
//   to: { t: number },
//   from: { t: number },
//   config: { duration: number },
//   reset: boolean,
// }

// export const animationConfig: IAnimationConfig = {
//   to:  async (next,) => {
//     await next({ t: 1 });
//   },
//   from: { t: 0},
//   config: { duration: animationDuration },
//   reset: true,
// }
export const animationDuration = 200;
export const animationConfig = {
  to: async (next, cancel) => {
    await next({ t: 1});
  },
  from: { t: 0 },
  config: { duration: animationDuration },
  reset: true,
}