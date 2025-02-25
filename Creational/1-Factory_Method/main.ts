import { ComboFactory, HeavyFactory, LiteFactory } from "./Factory";

const factory: ComboFactory = new HeavyFactory();
const Heavy = factory.createCombo();
Heavy.printCombo();

console.log("------------------------------------------");

const factory1: ComboFactory = new LiteFactory();
const lite = factory1.createCombo();
lite.printCombo();
