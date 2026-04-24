func orangesRotting(grid [][]int) int {
    
	rows, cols := len(grid), len(grid[0])
	fresh := 0
	time := 0

	for r := 0; r < rows; r++{
		for c := 0; c < cols; c++{
			if grid[r][c] == 1{
				fresh++
			}
		}
	}

	dirs := [][]int{{0,1}, {0,-1}, {1,0}, {-1,0}}

	for fresh > 0 {
		newly_rotted := [][]int{}
		flipped := false
		for r := 0; r < rows; r++{
			for c:= 0; c < cols; c++{
				if grid[r][c] == 2{
					for _, dir := range dirs{
						row, col := r +dir[0], c+dir[1]
						if row >= 0 && row < rows && col >= 0 && col < cols&& grid[row][col] ==1{
							grid[row][col] = -1
							newly_rotted = append(newly_rotted,[]int{row,col})
							fresh--
							flipped = true
						}
					}
				}
			}
		}

		if !flipped{
			return -1
		}

		for _,orange := range newly_rotted{
			r,c := orange[0], orange[1]
			grid[r][c] = 2
		}
		time++
	}
	return time
}
