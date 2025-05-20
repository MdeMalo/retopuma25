import os
from PIL import Image

input_dir = "src/assets"
output_dir = "src/assets-webp"

def convert_to_webp(input_path, output_path):
    try:
        with Image.open(input_path) as img:
            img.save(output_path, 'webp', quality=80)
            print(f"✔ Convertido: {input_path} -> {output_path}")
    except Exception as e:
        print(f"✖ Error con {input_path}: {e}")

for root, _, files in os.walk(input_dir):
    for file in files:
        if file.lower().endswith((".jpg", ".jpeg", ".png")):
            input_path = os.path.join(root, file)
            relative_path = os.path.relpath(input_path, input_dir)
            output_path = os.path.join(output_dir, os.path.splitext(relative_path)[0] + ".webp")

            os.makedirs(os.path.dirname(output_path), exist_ok=True)
            convert_to_webp(input_path, output_path)
