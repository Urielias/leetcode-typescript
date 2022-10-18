// Time Complexity: O(N)
// Space Complexity: O(N)

const twoSum = (nums: number[], target: number): number[] => {
    let numDict: {
        [key: number]: number;
    } = {};

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];

        if (numDict[target - num] !== undefined) {
            return [numDict[target - num], i];
        }

        numDict[num] = i;
    }

    return [];
};
