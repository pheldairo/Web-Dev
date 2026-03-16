if __name__ == '__main__':
    students = []

    for _ in range(int(input())):
        name = input()
        score = float(input())
        students.append([name, score])

    # get all unique scores and sort them
    scores = sorted(set([s[1] for s in students]))

    # second lowest score
    second = scores[1]

    # collect names with that score
    names = [s[0] for s in students if s[1] == second]

    # print alphabetically
    for name in sorted(names):
        print(name)
