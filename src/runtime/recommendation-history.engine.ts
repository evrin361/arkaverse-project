import { RecommendationHistoryItem } from "./recommendation-history.types";

const history: RecommendationHistoryItem[] = [];

export const recommendationHistoryEngine = {
add(item: RecommendationHistoryItem) {
history.push(item);


if (history.length > 20) {
  history.shift();
}


},

getAll() {
return history;
},
};
