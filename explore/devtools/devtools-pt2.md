1. The bug was that num1 and num2 were of type "string" and so when they were added using '+' operator result just becomes a concatenated stiring "$num1$num2"
2. You can fix this by converting num1 and num2 into integer values. This can be done by using the parseInt function which converts a string into its integer mapping.
