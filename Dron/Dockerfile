# Use an official Python runtime as a parent image
FROM python:3.8

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Install any needed packages specified in requirements.txt
RUN pip install -r requirements.txt
#RUN pip install djitellopy==1.5 opencv-python==4.4.0.46 pygame==2.0.1 numpy

# Run your Python script when the container launches
CMD ["python", "your_script.py"]


#docker build -t python-tello-dron .