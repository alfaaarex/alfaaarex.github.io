def transpose(matrix):
    matrix2 = [[matrix[i][j] for i in range(3)] for j in range(3)]
    for i in range(3):
        for j in range(3):
            matrix[j][i] = matrix2[i][j]
    print("\nThe transpose of the matrix is:")
    for row in matrix2:
           print(row," ")

print("Enter the elements of the 3x3 matrix row by row:")
matrix = []
for i in range(3):
    row = list(map(int, input(f"Row {i + 1}: ").split()))
    matrix.append(row)
transpose(matrix)
