import cv2
from pyzbar.pyzbar import decode

#pip install opencv-python pyzbar
#sudo apt-get install libzbar0  # For Debian/Ubuntu

def qr_code_to_link(image_path):
    """
    Decodes a QR code image and returns the data (usually a link).

    Args:
        image_path: The path to the QR code image file.

    Returns:
        The decoded data (string) if a QR code is found, otherwise None.
        Also returns the image with the QR code highlighted.
    """
    try:
        # 1. Read the image using OpenCV
        img = cv2.imread(image_path)
        if img is None:
            print(f"Error: Could not read image at {image_path}")
            return None, None

        # 2. Decode the QR code
        decoded_data = decode(img)

        # 3. Process the decoded data
        if decoded_data:
            for barcode in decoded_data:
                data = barcode.data.decode("utf-8")  # Decode from bytes to string
                polygon = barcode.polygon  # Get the polygon points for drawing a bounding box

                # Draw a bounding box around the QR code
                n = len(polygon)
                for j in range(n):
                    x1 = polygon[j][0]
                    y1 = polygon[j][1]
                    x2 = polygon[(j + 1) % n][0]
                    y2 = polygon[(j + 1) % n][1]
                    cv2.line(img, (x1, y1), (x2, y2), (0, 255, 0), 2)  # Green box

                return data, img # Return the data and the image with the box

        else:
            print("No QR code found in the image.")
            return None, None

    except Exception as e:
        print(f"An error occurred: {e}")
        return None, None


# Example usage:
image_path = "./ig-knitting.jpeg"  # Replace with the actual path
link, image_with_box = qr_code_to_link(image_path)

if link:
    print("Decoded Link:", link)
    cv2.imshow("QR Code with Bounding Box", image_with_box) # Display the image
    cv2.waitKey(0) # Wait for a key press
    cv2.destroyAllWindows() # Close the window
    cv2.imwrite("qr_code_with_box.png", image_with_box) # optionally save the image
else:
    print("Could not decode QR code.")