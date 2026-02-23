/**
 * Calculate XP needed for a given level
 * Uses exponential growth formula
 */
export function getXPForLevel(level: number): number {
  return level * 1000 + (level - 1) * 500;
}

/**
 * Calculate current level from total XP
 */
export function getLevelFromXP(xp: number): number {
  let level = 1;
  while (getXPForLevel(level + 1) <= xp) {
    level++;
  }
  return level;
}

/**
 * Calculate progress to next level as percentage
 */
export function getProgressToNextLevel(currentXP: number, level: number): {
  progress: number;
  xpInCurrentLevel: number;
  xpNeededForNextLevel: number;
  xpForCurrentLevel: number;
  xpForNextLevel: number;
} {
  const xpForCurrentLevel = getXPForLevel(level);
  const xpForNextLevel = getXPForLevel(level + 1);
  const xpInCurrentLevel = currentXP - xpForCurrentLevel;
  const xpNeededForNextLevel = xpForNextLevel - xpForCurrentLevel;
  const progress = Math.min((xpInCurrentLevel / xpNeededForNextLevel) * 100, 100);

  return {
    progress,
    xpInCurrentLevel,
    xpNeededForNextLevel,
    xpForCurrentLevel,
    xpForNextLevel,
  };
}
