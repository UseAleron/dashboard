export type GameTypes =
  | "minecraft_java"
  | "team_fortress_2"
  | "counter_strike_global_offence"
  | "minecraft_bedrock";

export interface Group {
  id: number;
  name: string;
  members: Member[];
}

export interface Member {
  id: number;
  name: string;
  picture?: string;
}

export interface Server {
  id: number;
  name: string;
  group: number;
  game: GameTypes;
  address: string;
}
