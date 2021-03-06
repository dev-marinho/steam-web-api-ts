/**
 * PlayerAchievements method properties interface
 * https://developer.valvesoftware.com/wiki/Steam_Web_API#GetPlayerAchievements_.28v0001.29
 *
 */
export default interface iPlayerAchievementsV1 {
  playerstats: {
    steamID: string;
    gameName: string;
    achievements: Array<{
      apiname: string;
      achieved: boolean;
      unlocktime: string;
    }>;
  };
}
