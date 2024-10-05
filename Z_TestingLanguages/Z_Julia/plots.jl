# import Pkg
# Pkg.add("Plots")

#https://github.com/JuliaPlots/PlotlyJS.jl

# import Pkg
# Pkg.add("PackageName#1.2.3")
# Pkg.update("PackageName#1.2.3")
# Pkg.add("PackageName#1.0:2.0")



# Import the Plots package
using Plots

# Generate some sample data
x = 1:10
y = [i^2 for i in x]

# Create a line plot
plot(x, y, label="y = x^2", xlabel="x", ylabel="y", title="Simple Line Plot")

# using Plots
# plot(rand(10))
# display(plot)  # Show the plot

#julia plots.jl

#https://lorenz-pere.geniecloud.app/