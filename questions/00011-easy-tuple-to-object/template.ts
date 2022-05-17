type TupleToObject<T extends readonly any[]> = {
    [S in T[number]]: S
}
