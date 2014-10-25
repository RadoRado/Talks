class ZnGroup:

    def __init__(self, n):
        self.n = n
        self.identity = 0

    def get_identity(self):
        return self.identity

    def operation(self, a, b):
        return (a + b) % self.n

    def get_elements(self):
        return [x for x in range(0, self.n)]

    def inverse_of(self, a):
        for x in self.get_elements():
            if self.operation(a, x) == self.get_identity():
                return x

    def exponent(self, x, n):
        if n == 0:
            return self.get_identity()

        result = x
        while n > 1:
            result = self.operation(result, x)
            n -= 1

        return result

    def cayley_table(self):
        result = []
        elements = self.get_elements()

        for a in elements:
            current_row = []
            for b in elements:
                current_row.append(self.operation(a, b))
            result.append(current_row)

        return result

    def generate_from(self, generator):
        result = []
        index = 1

        while True:
            next_member = self.exponent(generator, index)
            if next_member in result:
                break

            result.append(next_member)
            index += 1

        return set(result)

    def print_cayley_table(self):
        table_elements = self.cayley_table()
        table_elements = list(map(lambda row: list(map(str, row)), table_elements))

        index = 0
        elements = self.get_elements()

        for x in elements:
            table_elements[index].insert(0, str(x))
            index = index + 1

        first_row = ["+"] + list(map(str, elements))
        table_elements.insert(0, first_row)

        for row in table_elements:
            print(" ".join(row))
