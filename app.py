from flask import Flask, request, jsonify

app = Flask(__name__)

cotton_list = [
    6.0, 7.5,     # pH range
    0, 1,         # EC range
    0.5, 0.75,    # Organic Carbon range
    280, 560,     # Nitrogen range
    12, 25,       # Phosphorus range
    150, 300,     # Potassium range
    15, 30,       # Sulfur range
    0.6, 1.2,     # Zinc range
    0.5, 1.0,     # Boron range
    4.5, 6.0,     # Iron range
    1, 5,         # Manganese range
    0.2, 0.4,     # Copper range
    'black soil'  # Soil type
]

@app.route('/process_inputs', methods=['POST'])
def process_inputs():
    data = request.json
    inputs = data['inputs']  # The list of inputs sent from the front end

    # Ensure the inputs are in the correct format
    if len(inputs) != 13:
        return jsonify({"error": "Invalid number of inputs"}), 400

    priority = 0

    # Process the inputs based on your logic
    m1 = inputs  # Unpack the inputs list

    # pH
    if cotton_list[0] <= m1[0] <= cotton_list[1]:
        priority += 2

    # EC
    if cotton_list[2] <= m1[1] <= cotton_list[3]:
        priority += 1.5

    # Organic Carbon
    if cotton_list[4] <= m1[2] <= cotton_list[5]:
        priority += 1

    # Nitrogen
    if cotton_list[6] <= m1[3] <= cotton_list[7]:
        priority += 1

    # Phosphorus
    if cotton_list[8] <= m1[4] <= cotton_list[9]:
        priority += 1

    # Potassium
    if cotton_list[10] <= m1[5] <= cotton_list[11]:
        priority += 1

    # Sulfur
    if cotton_list[12] <= m1[6] <= cotton_list[13]:
        priority += 1

    # Zinc
    if cotton_list[14] <= m1[7] <= cotton_list[15]:
        priority += 1

    # Boron
    if cotton_list[16] <= m1[8] <= cotton_list[17]:
        priority += 1

    # Iron
    if cotton_list[18] <= m1[9] <= cotton_list[19]:
        priority += 1

    # Manganese
    if cotton_list[20] <= m1[10] <= cotton_list[21]:
        priority += 1

    # Copper
    if cotton_list[22] <= m1[11] <= cotton_list[23]:
        priority += 1

    # Soil type
    if m1[12] == cotton_list[22]:
        priority += 4

    return jsonify({"total_priority": priority})

if __name__ == '__main__':
    app.run(debug=True)
