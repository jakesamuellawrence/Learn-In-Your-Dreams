import replicate

MODEL = replicate.models.get("stability-ai/stable-diffusion")

def get_image(prompt):
    result = MODEL.predict(prompt=prompt)
    return result[0]